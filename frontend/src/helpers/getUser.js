import { API } from '../constants/api';
const getUser = async () => {
    try{
        const response = await fetch(API === 'test' ? 'http://localhost:3000/api/user' : '/api/user', {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })   
        if (!response.ok) {
            throw new Error('Failed to fetch user')
        }
        const data = await response.json()
        return data
    } catch (error) {
        return null
    }
}

export default getUser
