import { Image } from './Image';
export class ImageList {
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    private items: any[] = []

    getImages() {
        if (this.items && this.items.length > 0) {
            if (this.items[0] instanceof Image === false) {
                const list: Image[] = [];
                this.items.forEach(obj => {
                    const img = new Image();
                    Object.assign(img, obj);
                    list.push(img);
                })
                this.items = list;
            }
        }
        return this.items;
    }
}
