// Documents types
import concert from "./documents/concert";
import installation from "./documents/installation";
import post from "./documents/post";
import product from "./documents/product";
import release from "./documents/release";
import siteSettings from "./documents/siteSettings";
import spectacle from "./documents/spectacle";
import videos from "./documents/videos";
import photo from "./documents/photo";

// Object types
import image from "./objects/image";
import portableText from "./objects/portableText";
import paypalButtons from "./objects/paypalButtons";
import price from "./objects/price";
import video from "./objects/video";

// Then we give our schema to the builder and provide the result to Sanity
export default [
    image,
    portableText,
    paypalButtons,
    price,
    video,

    // Documents
    post,
    concert,
    spectacle,
    installation,
    product,
    release,
    videos,
    photo,
    siteSettings,

]
