async function getData() {
    const res = await fetch("http://localhost:3000/api/posts");
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export { getData }