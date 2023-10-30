class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
    watch() {
        return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    }
}

const a = new Video("video1","uploader1",57)
console.log(a.watch())
const a = new Video("video1","uploader2",56)