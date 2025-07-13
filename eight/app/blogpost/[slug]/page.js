export default async function Page({ params }) {
    // throw new Error('This is a test error')
  const { slug } = await params
  let languages = ['python', 'c++', 'cpp', 'java', 'javascript']
  if(languages.includes(slug)){
      return <div>My Post: {slug}</div>
  }
  else{
        return <div>Post not found</div>
  }
}