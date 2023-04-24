import {ref} from 'vue'

export default function useResource(resource) {
  const items = ref([])
  const item = ref(null)
  const baseUrl = `https://jsonplaceholder.typicode.com/${resource}`
  const fetchAll = async() => {
    const res = await fetch(baseUrl)
    items.value = await res.json()
  }
  const fetchOne = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`)
    item.value = await res.json()
  }
  return { items, item, fetchAll, fetchOne }
}