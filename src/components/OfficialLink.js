import { OFFICIAL } from '@/data/officialSources';

// An inline citation to an official source. Wraps the phrase that makes the
// claim ("registration is mandatory", "book on IRCTC HeliYatra") so the reader
// can check it at source. Followed on purpose: nofollow on a government
// citation says we don't vouch for the source we are citing.
export default function OfficialLink({ k, children }) {
  const src = OFFICIAL[k];
  if (!src) return <>{children}</>;
  return (
    <a href={src.url} target="_blank" rel="noopener" className="official-link" title={src.name}>
      {children || src.name}
    </a>
  );
}
