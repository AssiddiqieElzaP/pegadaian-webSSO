import axios from 'axios'
import { isLogged } from './utils';


export const ApiAuth = () => {
    const base64SSO = window.btoa(
        `delegasilocal:delegasilocal`,
      )
    const API = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
          'content-Type': 'application/json',
        //   Authorization: `Basic ${base64SSO}`,
        },
      })
      const loginSSO = (params) => {
    
        return API.post(`/api/v1/auth-sso/code`, params)
      }

      return{
        loginSSO
      }     
} 

export const API = () => {
    const isLogin = isLogged();
    const APIACCOUNT = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isLogin}`,
        },
      })
      const getApprovalDetail = (payload) => {
        return APIACCOUNT.get(`/api/v1/approval/grid`, {
          params: payload,
        })
      }
    
      return{
        getApprovalDetail
      }
}