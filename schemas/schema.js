// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Documents types
import concert from "./documents/concert";
import installation from "./documents/installation";
import post from "./documents/post";
import product from "./documents/product";
import release from "./documents/release";
import siteSettings from "./documents/siteSettings";
import spectacle from "./documents/spectacle";

// Object types
import image from "./objects/image";
import portableText from "./objects/portableText";
import paypalButtons from "./objects/paypalButtons";
import price from "./objects/price";
import video from "./objects/video";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Objects
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
    siteSettings,
  ]),
});
