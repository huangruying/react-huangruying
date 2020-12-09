import axios from '../utils/request'

const getByToStation = params => {
    return axios({
      method: 'post',
      url: '/tt/public/getByToStation',
      data: params
    })
}

const getPhoneByOpenId = data => {
    return axios({
      method: 'get',
      url: '/getPhoneByOpenId',
      params: data
    })
  }

export default {
  getByToStation,
  getPhoneByOpenId
}