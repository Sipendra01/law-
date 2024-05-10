import Link from "next/link";
import { Image } from 'react-bootstrap'
import React, { useRef, useEffect, useState } from "react";
import { useHeader } from "./hooks";
import { useCategory } from "../../../../src/container/home/CategoriesSlider/hook";
import styles from "../wweb/header.module.scss";
import Text from "../../../components/basic/Text";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container,
  Badge,
  Button,
  Card,
  Dropdown,

} from "react-bootstrap";
import useTypewriter from "react-typewriter-hook";
import SolitareMenu from "./components/solitare-menu";
import NewarrivalMenu from "./components/newarrival-menu";
import LoginPopup from "../../../components/common/login-popup";
import SignupPopup from "../../../components/common/signup-popup";
import MultiLineMenu from "./components/filter/multiline-menu";
import GoldCoinMenu from "./components/goldCoin-menu";
import AllJewelleryMenu from "./components/allJewellery-menu";
import { route } from "next/dist/server/router";
import Router from "next/router";
import {
  MegaMenuRings,
  MegaMenuEarrings,
  MegaMenuAll,
  MegaMenuNecklaes,
  MegaMenuBangle,
  rightArrow,
  address,
  order,
  wallet,
  location,
  view,
  size,
  coupan,
  garnetLogo,
  couponIcon,
} from "../images.js";
import LazyImage from "../../../components/common/lazy-image";
import { reverse } from "lodash";
import { toast } from "react-toastify";
import { colors } from "../../../constant/colors";
import useCardHook from "../../../components/basic/product-card/hook";
import { useSelector } from "react-redux";
import { HeaderSkelton } from "../../../container/skelton/headerSkelton";
import Skeleton from "react-loading-skeleton";
import { HEADER_MENU_ITEMS, Search_Data } from "../DATA";
import { Player } from "@lottiefiles/react-lottie-player";
import PincodeModel from "../../../container/individualProduct/component/dweb/productInfo/pincodeModel";
import { Cart, Wishlist, collection, firebaseDb, onSnapshot } from "../../../utils/firebase.utils";
import { useWishlist } from "react-use-wishlist";
const Header = (props) => {
  const router = useRouter();
  const refI = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist()

  const {
    visibility,
    showLoginModal,
    setShowLoginModal,
    showOtpModal,
    setShowOtpModal,
    signupModalVisibile,
    setSignupModalVisibile,
    showDivhandler,
    hideDivhandler,
    setUserdata,
    userDetail,
    userLogout,
    searchInput,
    setSearchInput,
    wishlistIds,
    cartIds,
    megaMenuItems,
    // showDropDown,
    setShowDropDownItem,
    showDropDownItem,
    key,
    setKey,
    handleKeyPress,
    handleSearchChange,
    searchProductTitle,
    dropDown,
    setDropDown,
    searchHistory,
    recent,
    setRecent,
    SelectSingleProduct,
    recentSearch,
    removeHoverButton,
    setHoverButton,
    isHover,
    showCallUsModal,
    setShowCallUsModal,
    handleshowCallUsModal,
    user,
    megamenu,
    handleClosePinCodeModal,
    handleShowPinCodeModal,
    showPinCodeModal,
    setShowPinCodeModal,
    fireStoreCartdata,
    setFirestoreCartData,
    fireStoreWishlistdata,
    setFirestoreWishlistData,
    handleCartQuantity
  } = useHeader(props);

  const { data } = useCardHook(props);
  const [isActive, SetActive] = useState(true);
  const [dropdown2, setDropDown2] = useState(false);
  const { category } = useCategory();
  const { data: { data: { product } = {} } = {} } = searchProductTitle;
  let onClickOutside;
  const { userDetail: Customer } = useSelector((state) => state.loggedUserDetail);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refI.current && !refI.current.contains(event.target)) {
        setShowDropDownItem(false);
      }
      if (ref3.current && !ref3.current.contains(event.target)) {
        setDropDown(false);
      }
      if (ref1.current && !ref1.current.contains(event.target)) {
        setTimeout(() => {
          setDropDown2(false);
        }, 500);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
  }, [onClickOutside]);
  const handleDropdown2 = (value) => {
    if (value) {
      Router.push({
        pathname: "/search",
        query: { q: value },
      });
      setDropDown2(false);
    }
  };
  const showDropDown = (e) => {
    setShowDropDownItem(!showDropDownItem);
  };
  const [scrolled, setScrolled] = useState(true);
  const [isTopNotch, setIsTopNotch] = useState(true);
  useEffect((_) => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 1) {
        setIsTopNotch(false);
      } else {
        setIsTopNotch(true);
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // return (_) => {
    // window.removeEventListener("scroll", handleScroll);
    // };
  });
  const hideMeagMenus = () => {
    setScrolled(true);
  };
  const showMeagMenus = () => {
    setScrolled(false);
  };
  const handleGotoRecentlyViewed = () => {
    if (!userDetail?._id) {
      toast.info("Login to access recently viewed products", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
      });
    } else {
      router.push("/profile/recently-viewed");
    }
  };

  const categoryNames = [
    "Rings Designs...",
    "Earrings Designs...",
    "Bracelets Designs...",
    "Pendants Designs...",
    "Bangles Designs...",
    "Necklaces Designs...",
  ];
  let index = 0;

  const [category_name, setCategoryName] = useState("Rings Designs...");
  const intervalRef = useRef({});
  const name = useTypewriter(category_name);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        // index = index + 1 > 2 ? 0 : ++index + 1;
        index = index > 2 ? 0 : ++index;
        setCategoryName(categoryNames[index]);
      }, 5000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [category_name]
  );

  return (
    <div
      className={`border d-none d-md-block ${router.pathname == "/jewellery/[categorySlug]" ||
        router.pathname == "/jewellery" ||
        router.pathname == "/collections/[slug]" ||
        router.pathname == "/special-discount" ||
        router.pathname == "/express-delivery"
        ? styles.nonStickyHeader
        : styles.stickyTopMenu
        }`}
    >
      <Container fluid>
        <Row className={`main-stripe-col align-items-center justify-content-center px-xl-4 ${styles.mainStripeCol}`}>
          <Col md={4} lg="3"></Col>
          <Col md={4} lg="6" className="text-center py-0">
            <div>
              <Text size={11} fontWeight={400} color='rgba(65, 62, 62, 1)' lineHeight="13.81px">
                Refer and earn extra discount&nbsp;
              </Text>
              <Text size={11} fontWeight={400} color='rgba(83, 28, 198, 1)' lineHeight="13.81px">
                Click here...
              </Text>
            </div>
          </Col>
          <Col md={4} lg="3" >
            <div className="d-flex align-items-center justify-content-end">
              <Text size={11} fontWeight={600} color='#302F2F' lineHeight="13.81px" >
                Pincode
              </Text>
              <div style={{ marginInline: "10px" }}>
                <Image src="/img/pinCodeModalIcon.svg"
                  height="17px" width="12px"
                  onClick={() => handleShowPinCodeModal()} role='button'
                />
              </div>
              <Image src="/img/headerFlag.svg" height="15px" width="15px" className={styles.headerFlag} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <div className={`${styles.headerDiv} px-3 pe-xl-5`}>
            <Navbar color="white" expand={false}>
              <Col md={2} className=''>
                <Link href="/" passHref>
                  <a className={`text-decoration-none noColor `}>
                    <Image src={garnetLogo} width='200px' height={40} role='button' className="w-100" />
                  </a>
                </Link>
              </Col>
              <Col md={3} xl={4} className='pe-lg-5 ps-xl-0 px-md-3'>
                <div className="d-center justify-content-between px-3 searchInputBox">
                  <input
                    ref={ref1} className={`searchInput`} placeholder={`Search ${name || ''}`} type="text"
                    aria-label="Search"
                    name="search"
                    onChange={(e) => {
                      handleSearchChange(e.target.value);
                    }}
                    onKeyDown={(e) => handleKeyPress(e)}
                    onFocus={(e) => setDropDown2(true)}
                    value={searchInput || ""}
                    autoComplete="off" />
                  <div className="d-flex justify-content-center align-items-center">
                    <span style={{ width: "1px", height: "22px", backgroundColor: '#e5e5e5' }}></span>
                    <div style={{ marginLeft: "10px" }}>
                      <Image role="button" src="/img/searchIcon1.svg" width={14} height={14} />
                    </div>
                  </div>
                </div>
                {product?.length && dropDown ? (
                  <Card
                    className={
                      product?.length > 7
                        ? `${styles.searchTitle}`
                        : `${styles.searchTitleBox} border-0`
                    }
                    ref={ref3}
                  >
                    <div
                      className={`py-2 px-2 d-flex flex-column text-start `}
                    >
                      {product?.map((productTitle, key) => {
                        return (
                          <>
                            <div
                              key={key}
                              role="button"
                              className={`border-bottom d-flex align-items-center py-1 ps-2`}
                              onClick={() => {
                                SelectSingleProduct(productTitle);
                              }}
                            >
                              <LazyImage src={productTitle?.bannerImage?.yellowGold || garnetLogo} width={30} height={30} className={`me-3`} />
                              <Text
                                size={12}
                                fontWeight={500}
                                color="#747070"
                                letterSpacing="0.2px"
                              >
                                {productTitle?.title}
                              </Text>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </Card>
                ) : (
                  ""
                )}
                {searchHistory?.length > 0 &&
                  !dropDown &&
                  !searchInput &&
                  dropdown2 ? (
                  <Card
                    className={
                      searchHistory?.length
                        ? `${styles.searchTitle1}`
                        : `border-0`
                    }
                  >
                    <div className={`py-2 px-2 d-flex flex-column text-start ${styles.searchTitleSub}`} ref={ref2}>
                      <Text size={13} fontWeight={600} color={"#747070"}>Trending Search</Text>
                      {Search_Data?.map((data, key) => {
                        return (
                          <div
                            key={key}
                            role={`button`}
                            className="d-flex align-items-center mt-3 pb-1 border-bottom"
                            onClick={() => {
                              Router.push(data?.pathName);
                            }}
                          >
                            <LazyImage src={data.searchIcon} className={`mx-2`} />
                            <div className="d-center justify-content-between w-100 px-2">
                              <div className="d-grid">
                                <Text size={15} fontWeight={700} color={"rgba(48, 47, 47, 1)"}>{data.itemSearch}</Text>
                                <Text size={11} fontWeight={500} color={"rgba(153, 146, 146, 1)"}>{data.itemAvailable}</Text>
                              </div>
                              <div><Text size={11} fontWeight={600} color={"rgba(0, 0, 0, 1)"}>{data.itemOffers}</Text></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                ) : (
                  ""
                )}
              </Col>
              <Col md={7} xl={5} className=''>
                <div className={`d-flex align-items-center justify-content-around`}>
                  {
                    HEADER_MENU_ITEMS?.map((item, index, len) => {
                      const length1 = len.length;
                      return (
                        <div
                          key={index}
                          className={`d-center ${(length1 - 1) !== index && styles.rightBorderIcon} `}
                          onClick={() => { item?.title == 'CONTACT US' && handleshowCallUsModal() }}
                        >
                          <Link href={item.link} passHref>
                            <a className={`text-decoration-none`}>
                              <div className={`text-center position-relative`}>
                                <div className={`mx-auto`}>
                                  {item.aniIcon ?
                                    <Player autoplay loop src={item.aniIcon} className={`${styles.headerIcons} ${styles.scaleIcon}`}
                                      style={{ height: '30px', width: '30px' }}
                                    /> :
                                    <Image src={item.icon} height={20} width={30} className={`${styles.headerIcons} ${styles.scaleIcon}`} />
                                  }
                                </div>
                                <div className={`text-uppercase`}>
                                  <div className={`${styles.headerTitles} mx-lg-2`}>
                                    {
                                      item?.title == 'CART' ?
                                        <Text size={11} fontWeight={600} color={colors.black} lineHeight='10px' className={`mx-2`}>
                                          {item.title}
                                          <Badge className={`gradientBackgroundHeadingReverse ${styles.cartBadge}`}
                                            pill={true}
                                            bg=""
                                          >
                                            {handleCartQuantity() || totalItems}
                                          </Badge>
                                        </Text>
                                        :
                                        item?.title == 'WISHLIST' ?
                                          <Text size={9} fontWeight={600} color={colors.black} lineHeight='10px'>
                                            {item.title}
                                            <Badge className={`gradientBackgroundHeadingReverse ${styles.cartBadge}`}
                                              pill={true}
                                              bg=""
                                            >
                                              {fireStoreWishlistdata?.length || totalWishlistItems}
                                            </Badge>
                                          </Text>
                                          :
                                          <Text size={9} fontWeight={600} color={colors.black} lineHeight='10px'>
                                            {item.title}
                                          </Text>
                                    }
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      )
                    })
                  }
                  <div >
                    <div role="button" className="d-center" onClick={showDropDown}>
                      <div className={`me-2`}>
                        <div className={`${styles.imgDiv}`}>
                          <img
                            alt="userimg"
                            src="/img/header-icons/profile.svg"
                            width="10px"
                            height="10px"
                            className="d-flex"
                            role={'button'}
                          />
                        </div>
                      </div>
                      {userDetail?._id ?
                        <div className={styles.textOverflowEllipsis}>
                          <div className={`mb-0 ${styles.userName}`}> Hi,{userDetail?.name} </div>
                          <div className={`${styles.bottomLine}`}></div>
                        </div>
                        :
                        <div onClick={() => router.push(`/login`)}>
                          <div className={`mb-0 ${styles.userName}`}> Sign In </div>
                          <div className={`${styles.bottomLine}`}></div>
                        </div>
                      }
                    </div>
                    {userDetail?._id && showDropDownItem && (
                      <div
                        className={showDropDownItem ? `${styles.dropdown}` : "d-none"}
                        onMouseLeave={() => setShowDropDownItem(false)}
                      >
                        <Row className="g-0">
                          <div className={`${styles.bgProfileImg} py-3`}>
                            <Col md="12" className="text-center">
                              <div
                                className={`d-flex justify-content-center  ${styles.marginTopNewBox}`}
                              >
                                <div className={`pb-2 ${styles.profilePicCircle}`}>
                                  <LazyImage
                                    src={
                                      userDetail?.image
                                        ? userDetail?.image
                                        : "/img/profile/ProfileNewIcon.svg"
                                    }
                                    height={30}
                                    width={40}
                                    className={`rounded-circle`}
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col md="12">
                              <div className={`text-center`}>
                                <div>
                                  <Text size={15} fontWeight={500} color={"#747070"}>
                                    {userDetail?.name
                                      ? userDetail?.name
                                      : `+${userDetail?.phone}`}
                                  </Text>
                                </div>
                                {userDetail?.phone ? (
                                  <div className="pt-1">
                                    <Text
                                      size={15}
                                      fontWeight={500}
                                      color={"#FD9149"}
                                    >{`+${userDetail?.phone}`}</Text>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </Col>
                          </div>
                          <Col md="12" className={`text-center ${styles.divBGColor}`}>
                            <div className="d-flex justify-content-evenly align-items-center">
                              <div
                                className={` ${styles.border_gradient} ${isActive ? styles.activeTab : styles.tabActive
                                  }`}
                                onMouseEnter={() => SetActive(true)}
                              >
                                <Link href={{ pathname: "/profile" }} passHref>
                                  <a className={`text-decoration-none`}>
                                    <div className={`py-3`}>
                                      <Button
                                        className={`px-0 text-center shadow-none ${styles.profileButtonLatest}`}
                                      >
                                        <div className="d-flex justify-content-center">
                                          <LazyImage
                                            className={` ${styles.profileIconLatest}`}
                                            src={
                                              isHover == "Profile"
                                                ? "/img/profile/profile-latest-white.svg"
                                                : "/img/profile/profileBlackIcon.svg"
                                            }
                                            width={20}
                                            height={20}
                                          />
                                        </div>
                                        <div>
                                          <Text
                                            size={11}
                                            fontWeight={500}
                                            color={"black"}
                                          >
                                            Profile
                                          </Text>
                                        </div>
                                      </Button>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                              <div
                                className={`${styles.border_gradient} ${styles.tabActive}`}
                                onMouseEnter={() => SetActive(false)}
                              >
                                <Link href={{ pathname: "/profile/orders" }} passHref>
                                  <a className={`text-decoration-none`}>
                                    <div className={`py-3`}>
                                      <Button
                                        className={`px-0 shadow-none ${styles.orderButtonLatest} `}
                                      >
                                        <div
                                          className="d-flex justify-content-center "
                                          role="button"
                                        >
                                          <LazyImage
                                            className={` ${styles.profileIconLatest} `}
                                            src={
                                              isHover == "Orders"
                                                ? "/img/profile/orderLatestWhite.svg"
                                                : "/img/profile/orderNewBlack.svg"
                                            }
                                            width={20}
                                            height={20}
                                          />
                                        </div>
                                        <Text size={11} fontWeight={500} color={"black"}>
                                          Orders
                                        </Text>
                                      </Button>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                              <div
                                className={`${styles.border_gradient} ${styles.tabActive}`}
                                onMouseEnter={() => SetActive(false)}
                              >
                                <Link href={{ pathname: "/profile" }} passHref>
                                  <a className={`text-decoration-none`}>
                                    <div className={`py-3`}>
                                      <Button
                                        className={`px-0 shadow-none ${styles.orderButtonLatest}`}
                                      >
                                        <div
                                          className="d-flex justify-content-center"
                                          role="button"
                                        >
                                          <LazyImage
                                            className={`${styles.profileIconLatest}`}
                                            src={
                                              isHover == "Settings"
                                                ? "/img/profile/settingsLatestWhite.svg"
                                                : "/img/profile/settingsBlackIcon.svg"
                                            }
                                            width={20}
                                            height={20}
                                          />
                                        </div>
                                        <Text
                                          size={11}
                                          fontWeight={500}
                                          color={"black"}
                                        >
                                          Settings
                                        </Text>
                                      </Button>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" className="text-center">
                            {userDetail?._id ? (
                              <div className={``}>
                                <Button
                                  onClick={userLogout}
                                  style={{ cursor: "pointer" }}
                                  className={`${styles.logoutBtnLatest} shadow-none`}
                                >
                                  <div className="d-flex justify-content-center align-items-center">
                                    <Text
                                      size={15}
                                      lineHeight="14px"
                                      fontWeight={500}
                                      color={"#000"}
                                    >
                                      LOG OUT
                                    </Text>
                                  </div>
                                </Button>
                              </div>
                            ) : (
                              <>
                                <a
                                  onClick={() => setShowLoginModal(true)}
                                  style={{ cursor: "pointer" }}

                                >
                                  <Button className={styles.logoutBtnLatest}>
                                    <div className="d-flex justify-content-start align-items-center">
                                      <LazyImage
                                        className={`me-2 d-flex justify-content-center align-items-center`}
                                        src="/img/profile/logoutLatest.svg"
                                        width={13}
                                        height={11}
                                      />
                                      <Text
                                        size={10}
                                        fontWeight={500}
                                        color={"#747070"}
                                      >
                                        Login/Register
                                      </Text>
                                    </div>
                                  </Button>
                                </a>
                              </>
                            )}
                          </Col>
                        </Row>
                      </div>
                    )}
                  </div>
                </div>
                {showCallUsModal && (
                  <>
                    <div
                      handleshowCallUsModal={handleshowCallUsModal}
                      showCallUsModal={showCallUsModal}
                      setShowCallUsModal={setShowCallUsModal}
                    >
                      <Row
                        className={`g-0 ${styles.callusModalDiv}`}
                        onMouseLeave={() => setShowCallUsModal(false)}
                      >
                        <div className={`${styles.paddingDiv} py-3`}>
                          <Col md="12" className="text-center">
                            <div
                              className={`d-flex justify-content-between  ${styles.marginTopNewBox}`}
                            >
                              <div>
                                <Text
                                  size={13}
                                  fontWeight={600}
                                  color={"#747070"}
                                >
                                  Call Us:
                                </Text>
                              </div>
                              <div>
                                <Text
                                  size={13}
                                  fontWeight={600}
                                  color={"#747070"}
                                >
                                  1800-202-0270
                                </Text>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" className={`pt-3 text-start`}>
                            <div>
                              <Text
                                size={15}
                                fontWeight={600}
                                color={colors.roseGold}
                              >
                                Need more help?
                              </Text>
                            </div>
                          </Col>
                          <Col md="12" className={`pt-2 text-start`}>
                            <div>
                              <Text
                                size={11}
                                fontWeight={500}
                                colspace-around
                                or={colors.newBlack}
                              >
                                Connect with our team and they will
                                sort out for you
                              </Text>
                            </div>
                          </Col>
                          <Col md={12} className={`pt-3`}>
                            <div
                              className={` d-flex justify-content-between align-items-center`}
                            >
                              <div>
                                <Link href="https://api.whatsapp.com/send?phone=9988898866">
                                  <div role="button" className={`${styles.greyCircleDiv}`}>
                                    <LazyImage src="/img/whtsappIcon.svg" width={20} height={19.84} className="d-flex" />
                                  </div>
                                </Link>
                                <Text size={10} fontWeight={500} colspace-around or={colors.newBlack}>
                                  whatsapp us
                                </Text>
                              </div>
                              <div>
                                <Link href="/contact-us">
                                  <div role="button" className={`${styles.greyCircleDiv}`}>
                                    <LazyImage src="/img/chatIcon.svg" width={20} height={19.84} className="d-flex" />
                                  </div>
                                </Link>
                                <Text size={10} fontWeight={500} colspace-around or={colors.newBlack}>
                                  Chat us
                                </Text>
                              </div>
                              <div>
                                <Link href="mailto: INFO@GARNETLANEE.COM">
                                  <div role="button" className={`${styles.greyCircleDiv}`}>
                                    <LazyImage src="/img/emailNewIcon.svg" width={20} height={19.84} className="d-flex" />
                                  </div>
                                </Link>
                                <Text size={10} fontWeight={500} colspace-around or={colors.newBlack}>
                                  Mail us
                                </Text>
                              </div>
                            </div>
                          </Col>
                        </div>
                        <div>
                          <Col md={12}>
                            <Button
                              className={`${styles.availableBtn}`}
                            >
                              <Text
                                size={13}
                                fontWeight={600}
                                color={colors.newBlack}
                              >
                                We are available 24/7
                              </Text>
                            </Button>
                          </Col>
                        </div>
                      </Row>
                    </div>
                  </>
                )}
              </Col>
            </Navbar>
          </div>
        </Row>
      </Container >
      <PincodeModel
        handleClosePinCodeModal={handleClosePinCodeModal}
        handleShowPinCodeModal={handleShowPinCodeModal}
        showPinCodeModal={showPinCodeModal}
        setShowPinCodeModal={setShowPinCodeModal}
      />
      {
        router.pathname !== "/cart" && (
          <div
            className={`overflow-hidden ${isTopNotch && "showMenuDiv"} ${scrolled ? "hideMenuDiv" : "showMenuDiv"
              }`}
          >
            {megamenu?.length ? (
              <Container
                fluid
                onClick={hideDivhandler}
                onMouseLeave={hideDivhandler}
              >
                <Row xs="1" className={`${styles.heightNav}`}>
                  <Col className="py-0 d-none d-md-block header-menu">
                    <Nav
                      className={`justify-content-between py-0 ${styles.scrollNav}`}
                    >
                      {megamenu?.map((item, index) => {
                        return (
                          <>
                            {item?.active && (
                              <NavItem
                                key={index}
                                className={`scrollNavItem-Border ${styles.scrollNavItem}`}
                              >
                                <div
                                  onClick={() =>
                                    showDivhandler(
                                      item.title?.toUpperCase() === "NEW ARRIVALS"
                                        ? "NEW_ARRIVAL"
                                        : item.title?.toUpperCase()
                                    )
                                  }
                                  onMouseOver={() =>
                                    showDivhandler(
                                      item.title?.toUpperCase() === "NEW ARRIVALS"
                                        ? "NEW_ARRIVAL"
                                        : item.title?.toUpperCase()
                                    )
                                  }
                                  className={`${styles.borderTopOnMenu}`}
                                >
                                  <NavLink
                                    href={`${item?.url}`}
                                    className={`header-menu-item ${styles.navlink_override}`}
                                    active
                                  >
                                    {item?.title?.toUpperCase()}
                                  </NavLink>
                                  {
                                    visibility == item?.title?.toUpperCase() && visibility !== "GOLD COINS" && visibility?.toUpperCase() !== "SOLITAIRE" && visibility?.toUpperCase() !== "ALL JEWELLERY" && visibility?.toUpperCase() !== "NEW ARRIVALS" && visibility?.toUpperCase() !== "GOLD TEASURE" &&
                                    <MultiLineMenu
                                      img={MegaMenuRings}
                                      items={item}
                                      categoryId={item?.id}
                                      type={item?.title}
                                      categorySlug={item?.slug}
                                      categoryName={item?.title}
                                      scrolled={scrolled}
                                      isTopNotch={isTopNotch}
                                    />
                                  }
                                  {
                                    visibility == "GOLD COINS" && item?.title?.toUpperCase() == "GOLD COINS" &&
                                    <GoldCoinMenu
                                      type="GOLD COINS"
                                      items={item}
                                      categorySlug={item?.slug}
                                      url={item?.url}
                                      categoryName={item?.title?.toUpperCase()}
                                      scrolled={scrolled}
                                      isTopNotch={isTopNotch}
                                    />
                                  }
                                  {
                                    visibility == "SOLITAIRE" && item?.title?.toUpperCase() == "SOLITAIRE" &&
                                    <SolitareMenu
                                      type="SOLITAIRE"
                                      categorySlug={item?.slug}
                                      items={item}
                                      categoryName={item?.title}
                                      scrolled={scrolled}
                                      isTopNotch={isTopNotch}
                                      category={category}
                                    />
                                  }
                                  {
                                    visibility == "ALL JEWELLERY" && item?.title?.toUpperCase() == "ALL JEWELLERY" &&
                                    <AllJewelleryMenu
                                      img={MegaMenuAll}
                                      categoryId={item?.id}
                                      items={item}
                                      type="ALL JEWELLERY"
                                      categorySlug={item?.slug}
                                      categoryName={item?.title}
                                      scrolled={scrolled}
                                      isTopNotch={isTopNotch}
                                    />
                                  }
                                  {
                                    visibility == "NEW_ARRIVAL" && item?.title?.toUpperCase() == "NEW ARRIVALS" &&
                                    <NewarrivalMenu
                                      type="NEW ARRIVALS"
                                      scrolled={scrolled}
                                      items={item}
                                      isTopNotch={isTopNotch}
                                    />
                                  }
                                </div>
                              </NavItem>
                            )}
                          </>
                        );
                      })}
                    </Nav>
                  </Col>
                </Row>
              </Container>
            ) : (
              ""
            )}
          </div>
        )
      }
      <LoginPopup
        isOpen={showLoginModal}
        handleLoginModalPopup={setShowLoginModal}
        setUserdata={setUserdata}
        handleSignupModalPopup={setSignupModalVisibile}
      />
      <SignupPopup
        isOpen={signupModalVisibile}
        handleSignupModalPopup={setSignupModalVisibile}
      />
    </div >
  );
};

export default Header;