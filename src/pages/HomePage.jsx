import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
// custom
import "../styles/homePage.css";

export default function TitlebarImageList() {
  return (
    <div className="block-2">
      <ImageList id="block-1" sx={{ width: 1000, height: "80vh" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://luxurylaunches.com/wp-content/uploads/2021/06/balenciaga-fall-2021-nasa-collection-5-770x820.jpg",
    title: "Bag",
    author: "@Urmat",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://i.pinimg.com/736x/a6/c8/7b/a6c87b22deb9f73180781501cccfbaf1.jpg",
    title: "Burger",
    author: "@Urmat",
  },
  {
    img: "https://i.pinimg.com/736x/28/11/a5/2811a589ae255be6e34635387961ef76.jpg",
    title: "Camera",
    author: "@Urmat",
  },
  {
    img: "https://i.imgur.com/bkt199m.png",
    title: "Coffee",
    author: "@Urmat",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/236x/ea/9d/a8/ea9da8d4c6b0a25dd6270be1f3baa506.jpg",
    title: "Hats",
    author: "@Urmat",
    cols: 2,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/61e-Ip3XvzL._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg",
    title: "Honey",
    author: "@Urmat",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://cdn.media.amplience.net/s/hottopic/20405616_hi?$productTileDesktop$",
    title: "Basketball",
    author: "@Urmat",
  },
  {
    img: "https://media.endclothing.com/media/catalog/product/2/0/20-09-2018_undercover_polarfleecespacesuitpant_black_ucv4505-1-f_mg_1.jpg",
    title: "Fern",
    author: "@Urmat",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-bnNBx2qcOcIq4IF3Mgoeem11oKKIHgj8a-WylDTlpngmLDngD0I9pAK5XWCEWFKaxw&usqp=CAU",
    title: "Mushrooms",
    author: "@Urmat",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl4VqVhoyxqYrVargXlfsJgsBd9Z0fnOkrFLL0bgBJxcyJKQSIXvkV-8yQ-a3Rb0Z62w&usqp=CAU",
    title: "Tomato basil",
    author: "@Urmat",
  },
  {
    img: "https://i.pinimg.com/236x/ee/91/3d/ee913d1cb3aa4b04038180d49516084b.jpg",
    title: "Sea star",
    author: "@Urmat",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQWmY9sVIL_LSexHrZThjqTwy_4bBzC23JGxNSirxa37Xiz3RTsaNm5E6X03lz4BG5As&usqp=CAU",
    title: "Bike",
    author: "@Urmat",
    cols: 2,
  },
];
