export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h2>movie {id}</h2>;
}
