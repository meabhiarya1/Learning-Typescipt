// interface TakePhoto {
//     cameraMode: string,
//     filter: string,
//     burst: string
// }

// interface Story {
//     createStory(): void
// }

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: string
//     ) {}
// }

// class Youtube implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: string,
//         public short: string
//     ) {}

//     createStory(): void {
//         console.log("story created")
//     }
// }