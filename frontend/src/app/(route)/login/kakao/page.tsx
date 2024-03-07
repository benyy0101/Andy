import { useParams } from 'next/navigation';

function page() {
    const params = useParams();
  return (
    <div>page</div>
  )
}

export default page