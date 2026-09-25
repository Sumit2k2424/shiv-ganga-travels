#!/usr/bin/env bash
# Vercel "Ignored Build Step" (vercel.json → ignoreCommand).
#   exit 0 → skip this deploy      exit 1 → build as normal
#
# Why: every production deploy empties the edge cache, so the next request
# for each of the ~116 pages in every region is re-read from Vercel's ISR
# store and billed by size (8 KB per read unit). In Aug–Sep 2026 that ran
# to 1.3M read units against a 1M Hobby cap, and 13 of the 103 commits in
# the window changed nothing the site is built from — outreach packets,
# docs, .gitignore, empty "retrigger" commits.
#
# The rule is an allowlist of INERT paths: the build is skipped only when
# every changed file is one of them. Anything unrecognised builds.
#
# To force a build with no source change, put "[deploy]" in the commit
# message, or use Redeploy on the deployment in the Vercel dashboard.

case "$VERCEL_GIT_COMMIT_MESSAGE" in
  *"[deploy]"*) exit 1 ;;
esac

# Compare against the last SUCCESSFUL deploy, not just the last commit. On
# 25 Sep 2026 a push of five commits ended with a scripts/-only commit; diffing
# HEAD^..HEAD saw only that one and cancelled the deploy, so the four content
# commits before it never shipped. VERCEL_GIT_PREVIOUS_SHA is set by Vercel in
# the Ignored Build Step only; HEAD^ remains the fallback.
#
# Overridable so the rule can be tested locally against any commit:
#   VERCEL_IGNORE_FROM=<sha> VERCEL_IGNORE_TO=<sha> bash scripts/vercel-ignore.sh; echo $?
to=${VERCEL_IGNORE_TO:-HEAD}
from=${VERCEL_IGNORE_FROM:-${VERCEL_GIT_PREVIOUS_SHA:-$to^}}

# No parent commit (first deploy, shallow clone without history) → build.
git rev-parse --verify "$from" >/dev/null 2>&1 || exit 1

changed=$(git diff --name-only "$from" "$to") || exit 1

# Empty commit: nothing to ship. See the [deploy] escape hatch above.
if [ -z "$changed" ]; then
  echo "vercel-ignore: empty commit, skipping build (use [deploy] to force)"
  exit 0
fi

while IFS= read -r f; do
  case "$f" in
    outreach/*|scripts/*|seo/*|repo/*|.claude/*|.impeccable/*|testwrite/*) ;;
    *.md|*.xlsx|*.pdf|*.gs) ;;
    .gitignore|.env.local.example|directory-submissions.md) ;;
    *)
      echo "vercel-ignore: '$f' affects the site, building"
      exit 1 ;;
  esac
done <<< "$changed"

echo "vercel-ignore: only inert files changed, skipping build"
exit 0
