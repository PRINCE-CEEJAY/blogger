export default function PostCard({ post }) {
  return (
    <div className='bg-white p-4 rounded shadow mb-4'>
      <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
