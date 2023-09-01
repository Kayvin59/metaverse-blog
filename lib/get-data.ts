async function getPosts() {
    const res = await fetch("http://localhost:3000/posts");
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

async function getPostdetails(id: string) {
    const res = await fetch("http://localhost:3000/posts/" + id);
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export { getPosts, getPostdetails }