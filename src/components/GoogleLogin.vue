<template>
  <div id="googleLoginBtn"></div>
</template>

<script>
export default {
  
  mounted() {
    const gClientId = ['318765753970-8c8edop1eso3eaiiatlj7qeqo5sdm2n7.apps.googleusercontent.com']

    // 避免找不到 accounts undefined，確認 google apk is loaded
    window.onGoogleLibraryLoad = () => {
      window.google.accounts.id.initialize({
        client_id: gClientId,
        callback: this.handleCredentialResponse
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleLoginBtn"), {
          size: 'large', // or 'small' | 'medium'
          width: '366', // max width 400
          theme: 'outline', // or 'filled_black' |  'filled_blue'
          logo_alignment: 'left' // or 'center'
        }
      )
    }
  },
  methods: {
    async handleCredentialResponse(response) {
      console.log(response)
    }
  }
}

</script>