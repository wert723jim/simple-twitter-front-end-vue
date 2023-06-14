<template>
  <div
    class="wrapper"
    @click="handleSingIn"
    v-bind:class="{ hoverBtn: !showLoading }"
  >
    <div class="googleIcon">
      <svg
        width="42px"
        height="42px"
        viewBox="0 0 46 46"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <!-- Generator: Sketch 3.3.3 (12081) - http://www.bohemiancoding.com/sketch -->
        <title>btn_google_dark_normal_ios</title>
        <desc>Created with Sketch.</desc>
        <defs>
          <filter
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
            id="filter-1"
          >
            <feOffset
              dx="0"
              dy="1"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="0.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0"
              in="shadowBlurOuter1"
              type="matrix"
              result="shadowMatrixOuter1"
            ></feColorMatrix>
            <feOffset
              dx="0"
              dy="0"
              in="SourceAlpha"
              result="shadowOffsetOuter2"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="0.5"
              in="shadowOffsetOuter2"
              result="shadowBlurOuter2"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0"
              in="shadowBlurOuter2"
              type="matrix"
              result="shadowMatrixOuter2"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
              <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <!-- <rect id="path-2" x="0" y="0" width="40" height="40" rx="2"></rect> -->
          <!-- <rect id="path-3" x="5" y="5" width="38" height="38" rx="1"></rect> -->
        </defs>
        <g
          id="Google-Button"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <g
            id="9-PATCH"
            sketch:type="MSArtboardGroup"
            transform="translate(-608.000000, -219.000000)"
          ></g>
          <g
            id="btn_google_dark_normal"
            sketch:type="MSArtboardGroup"
            transform="translate(-1.000000, -1.000000)"
          >
            <g
              id="button"
              sketch:type="MSLayerGroup"
              transform="translate(4.000000, 4.000000)"
              filter="url(#filter-1)"
            >
              <g id="button-bg">
                <use
                  fill="#4285F4"
                  fill-rule="evenodd"
                  sketch:type="MSShapeGroup"
                  xlink:href="#path-2"
                ></use>
                <use fill="none" xlink:href="#path-2"></use>
                <use fill="none" xlink:href="#path-2"></use>
                <use fill="none" xlink:href="#path-2"></use>
              </g>
            </g>
            <g id="button-bg-copy">
              <use
                fill="#FFFFFF"
                fill-rule="evenodd"
                sketch:type="MSShapeGroup"
                xlink:href="#path-3"
              ></use>
              <use fill="none" xlink:href="#path-3"></use>
              <use fill="none" xlink:href="#path-3"></use>
              <use fill="none" xlink:href="#path-3"></use>
            </g>
            <g
              id="logo_googleg_48dp"
              sketch:type="MSLayerGroup"
              transform="translate(15.000000, 15.000000)"
            >
              <path
                d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                id="Shape"
                fill="#4285F4"
                sketch:type="MSShapeGroup"
              ></path>
              <path
                d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                id="Shape"
                fill="#34A853"
                sketch:type="MSShapeGroup"
              ></path>
              <path
                d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                id="Shape"
                fill="#FBBC05"
                sketch:type="MSShapeGroup"
              ></path>
              <path
                d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                id="Shape"
                fill="#EA4335"
                sketch:type="MSShapeGroup"
              ></path>
              <path
                d="M0,0 L18,0 L18,18 L0,18 L0,0 Z"
                id="Shape"
                sketch:type="MSShapeGroup"
              ></path>
            </g>
            <g id="handles_square" sketch:type="MSLayerGroup"></g>
          </g>
        </g>
      </svg>
    </div>
    <div class="text">
      <p>
        <slot></slot>
      </p>
      <p v-show="showLoading">
        <svg
          class="loading"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="background: none; shape-rendering: auto"
          width="35px"
          height="35px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(80,50)">
            <g transform="rotate(0)">
              <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.875s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.875s"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(71.21320343559643,71.21320343559643)">
            <g transform="rotate(45)">
              <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.875">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.75s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.75s"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(50,80)">
            <g transform="rotate(90)">
              <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.75">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.625s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.625s"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(28.786796564403577,71.21320343559643)">
            <g transform="rotate(135)">
              <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.625">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5s"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(20,50.00000000000001)">
            <g transform="rotate(180)">
              <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.5">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.375s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.375s"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(28.78679656440357,28.786796564403577)">
            <g transform="rotate(225)">
              <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.375">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.25s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.25s"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(49.99999999999999,20)">
            <g transform="rotate(270)">
              <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.25">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.125s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.125s"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(71.21320343559643,28.78679656440357)">
            <g transform="rotate(315)">
              <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.125">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="0s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="0s"
                ></animate>
              </circle>
            </g>
          </g>
        </svg>
      </p>
    </div>
  </div>
</template>

<script>
import {
  makeCoddVerifier,
  makeCodeChallenge,
  makeCodeUrl,
  reqToken,
} from '../utils/googleHelpers'
import authAPI from '../apis/authorization'
import { Toast } from '../utils/helpers'

export default {
  data() {
    return {
      state: '',
      showLoading: false,
    }
  },
  methods: {
    handleSingIn() {
      if (this.showLoading) return
      this.showLoading = true
      const state = Math.random().toString()
      const code_verifier = makeCoddVerifier()
      const code_challenge = makeCodeChallenge(code_verifier)
      const codeUrl = makeCodeUrl(state, code_challenge)
      const targetWindow = window.open(codeUrl)
      const clock = setInterval(() => {
        console.log(targetWindow.length)
        if (targetWindow.length === 0) {
          this.showLoading = false
          clearInterval(clock)
        }
      }, 2000)

      window.addEventListener('message', async (event) => {
        if (event.data === 'check_state') {
          targetWindow.postMessage(state)
        } else if (event.data.code) {
          // request token
          console.log('request token')
          const id_token = await reqToken(event.data.code, code_verifier)
          console.log(id_token)
          if (!id_token) return

          try {
            // 登入成功取得 access token 和 使用者資料
            const { data } = await authAPI.googleLogin(id_token)
            //將 access token 存入 local storage
            localStorage.setItem('token', data.accessToken)
            // 將使用者資訊使用 mutation 傳入 Vuex
            this.$store.commit('setCurrentUser', data)
            Toast.fire({
              icon: 'success',
              title: '登入成功',
            })
            this.$router.push({ name: 'main' })
          } catch (err) {
            const message = err.response
              ? err.response.data.message
              : false || err.message
            Toast.fire({
              icon: 'error',
              title: message,
            })
            this.showLoading = false
          }
        } else if (event.data === 'close') {
          console.log('關閉視窗')
          this.showLoading = false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Roboto-Medium';
  src: url('../assets/font/Roboto-Medium.ttf');
}

.hoverBtn:hover {
  cursor: pointer;
  background-color: #4285f4;
}

.wrapper {
  width: 356px;
  border-radius: 50px;
  border: 1px solid #1a73e8;
  margin-top: 8px;
  background-color: #1a73e8;

  .googleIcon {
    margin-top: 1px;
    margin-left: 2px;
    position: absolute;
    border-radius: 50px;
    background-color: #fff;
  }

  .text {
    font-size: 15px;
    font-family: Roboto-Medium;
    color: #fff;
    text-align: center;
    justify-content: center;
    display: flex;
    .loading {
      position: absolute;
      margin-left: 15px;
      margin-top: -9px;
    }
  }
}
</style>
