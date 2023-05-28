import { BASE_URL } from "@/constants/appInfos"
import axiosClient from "./axiosClient"
import { Post } from "@/models/Post"


class HandleUser {
   getUsers = async (url: string) => {
    return axiosClient.get(BASE_URL + url)
  }

  // putPost = async (url: string, data: Post) => {
  //   return axiosClient.put(BASE_URL + url, data)
  // }
 }

 const handleUsers = new HandleUser()

 export default handleUsers