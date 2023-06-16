// 封裝請求google api: OAuth2 + pkce

import randomstring from 'randomstring'
import crypto from 'crypto'
import base64url from 'base64url'
import axios from 'axios'
import { Toast } from '@/utils/helpers'

export const makeCoddVerifier = () => {
  return randomstring.generate(128)
}

export const makeCodeChallenge = (code_verifier) => {
  const base64Digest = crypto
    .createHash('sha256')
    .update(code_verifier)
    .digest('base64')
  const code_challenge = base64url.fromBase64(base64Digest)
  return code_challenge
}

export const makeCodeUrl = (state, code_challenge) => {
  const url = 'https://accounts.google.com/o/oauth2/v2/auth'
  const options = {
    client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
    redirect_uri: process.env.VUE_APP_GOOGLE_OAUTH_REDIRECT,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    state,
    code_challenge,
    code_challenge_method: 'S256',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
  }
  const qs = new URLSearchParams(options)
  return `${url}?${qs.toString()}`
}

export const reqToken = async (code, code_verifier) => {
  const url = 'https://oauth2.googleapis.com/token'
  const data = new FormData()
  data.append('code', code)
  data.append('client_id', process.env.VUE_APP_GOOGLE_CLIENT_ID)
  data.append('client_secret', process.env.VUE_APP_GOOGLE_CLIENT_SECRET)
  data.append('redirect_uri', process.env.VUE_APP_GOOGLE_OAUTH_REDIRECT)
  data.append('code_verifier', code_verifier)
  data.append('grant_type', 'authorization_code')
  try {
    const axiosRes = await axios({
      method: 'post',
      url,
      data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    return axiosRes.data.id_token
  } catch (err) {
    Toast.fire({
      icon: 'error',
      title: err.response.data.error,
    })
  }
}
