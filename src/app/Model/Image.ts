export class Image {
    title: string;
    link: string;
    private media: { m: string };
    date_taken: Date;
    description: string;
    published: Date;
    author: string;
    author_id: string;
    tags: string;

    getImageURL() {
        if (this.media) {
            return this.media.m;
        }
        return null;
    }
}
