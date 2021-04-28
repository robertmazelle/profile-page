import React, {useState} from 'react';
import { ImageChanger } from '..';
import { injectIntl, FormattedMessage } from "gatsby-plugin-react-intl";

import firstTravelImage from '../../images/DSC_0262.jpg';
import secondTravelImage from '../../images/DSC_0098.jpg';
import thirdTravelImage from '../../images/DSC_0464.jpg';
import fourthTravelImage from '../../images/DSC_0361.jpg';

import firstDIYImage from '../../images/1618941128223.jpg';
import secondDIYImage from '../../images/1618941174767.jpg';
import thirdDYIImage from '../../images/1618941236437.jpeg';
import fourthDIYImage from '../../images/1618941258853.jpg';

import * as css from './HobbiesPanel.module.css';

const GAME_IMAGES = [
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/2/pr_2020_2_20_15_54_38_264_00.jpg',
  'https://image.api.playstation.com/vulcan/img/rnd/202009/2923/jAT7HjpL49A62bU7hLKXJ96b.png',
  'https://images.morele.net/i1064/4763905_0_i1064.jpg'
]

const BOOK_IMAGES = [
  'https://ecsmedia.pl/c/krew-elfow-wiedzmin-tom-3-w-iext69126807.jpg',
  'https://archiwum.allegro.pl/ns-old-a75/64ef7c46bb8bc41289868156ca391201c171babe42d18f4094dd673326eb8a75',
  'https://images-na.ssl-images-amazon.com/images/I/9190BuNfU-L.jpg',
  'https://books4children.pl/wp-content/uploads/2020/06/Harry-Potter-and-the-Philosophers-Stone.jpg',
  'https://a.allegroimg.com/s512/110fea/f450ae9c436dbd1296b61e374a44/It-The-classic-book-from-Stephen-King-with-a-new',
  'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg'
]

const DIY_IMAGES = [
  firstDIYImage,
  secondDIYImage,
  thirdDYIImage,
  fourthDIYImage
]

const TRAVEL_IMAGES = [
  firstTravelImage,
  secondTravelImage,
  thirdTravelImage,
  fourthTravelImage
]

const HobbiesPanel = () => {

  const [lastInfoVisible, setLastInfoVisible] = useState(false);

  return (
    <div className={css.panel}>
      <div aria-hidden="true" className={css.imageWrapper} >
        <ImageChanger className={css.image} images={GAME_IMAGES} presentationTime={1500} />
        <div className={css.hobbyItemInfo}><FormattedMessage id="HobbiesPanel.firstGroupInfo" /></div>
      </div>

      <div aria-hidden="true" className={css.imageWrapper}>
        <ImageChanger className={css.image} images={TRAVEL_IMAGES} presentationTime={1500} />
        <div className={css.hobbyItemInfo}><FormattedMessage id="HobbiesPanel.secondGroupInfo" /></div>
      </div>

      <div aria-hidden="true"  className={css.imageWrapper}>
        <ImageChanger className={css.image} images={BOOK_IMAGES} presentationTime={1500} />
        <div className={css.hobbyItemInfo}><FormattedMessage id="HobbiesPanel.thirdGroupInfo" /></div>
      </div>

      <div aria-hidden="true"  className={css.imageWrapper} onMouseOverCapture={() => setLastInfoVisible(true)} onMouseLeave={() => setLastInfoVisible(false)}>
        <ImageChanger className={css.image} images={DIY_IMAGES} presentationTime={1500} />
        {lastInfoVisible && <div className={css.hobbyItemInfo}><FormattedMessage id="HobbiesPanel.fourthGroupInfo" /></div>}
      </div>

    </div>
          
        )
}

export default injectIntl(HobbiesPanel);