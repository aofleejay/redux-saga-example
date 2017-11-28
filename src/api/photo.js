import axios from 'axios'
import { JSON_PLACEHOLDER_ENDPOINT } from '../constants/endpoints'

export const getPhotos = () => axios.get(`${JSON_PLACEHOLDER_ENDPOINT}/photos`)
