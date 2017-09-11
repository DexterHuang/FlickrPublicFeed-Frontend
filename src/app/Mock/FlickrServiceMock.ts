import { ImageList } from './../Model/ImageList';
export class FlickrServiceMock {
    private imageList: ImageList = new ImageList();

    getFeed() {
        return this.imageList;
    }
}
