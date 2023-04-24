import {ref} from 'vue'
export default function usePost() {
  const posts = ref([])
  const post = ref(null)
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
  const fetchAll = async() => {
    const res = await fetch(baseUrl)
    posts.value = await res.json()
  }
  const fetchOne = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`)
    post.value = await res.json()
  }
  return { posts, post, fetchAll, fetchOne }
}