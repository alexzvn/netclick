<template>
  <div class="container mx-auto">
    <div class="min-h-screen bg-green-100">
      <div id="video"></div>
    </div>
  </div>
</template>

<script>
import IndigoPlayer, { Events } from 'indigo-player'
import "indigo-player/lib/indigo-theme.css"

export default {

  data () {
    return {
      player: null,
      ui: true
    }
  },

  mounted () {
    const config = {
      sources: [{
        type: 'mp4',
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      }],
    }

    this.player = IndigoPlayer.init(document.getElementById('video'), config)

    this.registerPlayerEvent()
  },

  methods: {
    registerPlayerEvent () {
      this.player.on(Events.UI_VISIBLECONTROLS_CHANGE, ({ visibleControls }) => {
        console.log(this.ui = visibleControls)
      })
    }
  }
}
</script>
