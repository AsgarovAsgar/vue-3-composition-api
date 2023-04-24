import {ref} from 'vue'
export default function useUser() {
  const users = ref([])
  const user = ref(null)
  const baseUrl = 'https://jsonplaceholder.typicode.com/users'
  const fetchAll = async() => {
    const res = await fetch(baseUrl)
    users.value = await res.json()
  }
  const fetchOne = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`)
    user.value = await res.json()
  }
  return { users, user, fetchAll, fetchOne }
}