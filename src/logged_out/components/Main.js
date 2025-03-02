import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import { withStyles, Fab } from "@material-ui/core";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import dummyBlogPosts from "../dummy_data/blogPosts";
import DialogSelector from "./register_login/DialogSelector";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import createWhatsappLink from "../../shared/functions/createWhatsappLink";

AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(null);
  const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);

  const selectHome = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Casa Luz - Bienvenidos";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectHombres = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Casa Luz - Hombres";
    setSelectedTab("Hombres");
  }, [setSelectedTab]);

  const selectMujeres = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Casa Luz - Mujeres";
    setSelectedTab("Mujeres");
  }, [setSelectedTab]);

  const selectMatrimonios = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Casa Luz - Matrimonios";
    setSelectedTab("Matrimonios");
  }, [setSelectedTab]);

  const selectCasasLuz = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Casa Luz - Casas de Luz";
    setSelectedTab("Casas de Luz");
  }, [setSelectedTab]);

  const selectJovenes = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Casa Luz - Jovenes";
    setSelectedTab("Jovenes");
  }, [setSelectedTab]);

  const selectNiños = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Casa Luz - Niños";
    setSelectedTab("Niños");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    smoothScrollTop();
    document.title = "Casa Luz - Blog";
    setSelectedTab("Blog");
  }, [setSelectedTab]);

  const selectCursos = useCallback(() => {
    smoothScrollTop();
    document.title = "Casa Luz - Cursos";
    setSelectedTab("Cursos");
  }, [setSelectedTab]);

  const selectQuienesSomos = useCallback(() => {
    smoothScrollTop();
    document.title = "Casa Luz - Quienes somos";
    setSelectedTab("Acerca de LPN");
  }, [setSelectedTab]);
  
  const openLoginDialog = useCallback(() => {
    setDialogOpen("login");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const closeDialog = useCallback(() => {
    setDialogOpen(null);
  }, [setDialogOpen]);

  const openRegisterDialog = useCallback(() => {
    setDialogOpen("register");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const openTermsDialog = useCallback(() => {
    setDialogOpen("termsOfService");
  }, [setDialogOpen]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  const openChangePasswordDialog = useCallback(() => {
    setDialogOpen("changePassword");
  }, [setDialogOpen]);

  const fetchBlogPosts = useCallback(() => {
    const blogPosts = dummyBlogPosts.map((blogPost) => {
      let title = blogPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      blogPost.url = `/blog/post/${title}`;
      blogPost.params = `?id=${blogPost.id}`;
      return blogPost;
    });
    setBlogPosts(blogPosts);
  }, [setBlogPosts]);

  const handleCookieRulesDialogOpen = useCallback(() => {
    setIsCookieRulesDialogOpen(true);
  }, [setIsCookieRulesDialogOpen]);

  const handleCookieRulesDialogClose = useCallback(() => {
    setIsCookieRulesDialogOpen(false);
  }, [setIsCookieRulesDialogOpen]);

  useEffect(fetchBlogPosts, [fetchBlogPosts]);

  return (
    <div className={classes.wrapper}>
      {!isCookieRulesDialogOpen && (
        <CookieConsent
          handleCookieRulesDialogOpen={handleCookieRulesDialogOpen}
        />
      )}
      <DialogSelector
        openLoginDialog={openLoginDialog}
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        openTermsDialog={openTermsDialog}
        openRegisterDialog={openRegisterDialog}
        openChangePasswordDialog={openChangePasswordDialog}
      />
      <CookieRulesDialog
        open={isCookieRulesDialogOpen}
        onClose={handleCookieRulesDialogClose}
      />
      <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        openLoginDialog={openLoginDialog}
        openRegisterDialog={openRegisterDialog}
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
      />
      <Routing
        blogPosts={blogPosts}
        selectHome={selectHome}
        selectBlog={selectBlog}
        selectCasasLuz={selectCasasLuz}
        selectHombres={selectHombres}
        selectJovenes={selectJovenes}
        selectMatrimonios={selectMatrimonios}
        selectNiños={selectNiños}
        selectMujeres={selectMujeres}
        selectCursos={selectCursos}
        selectQuienesSomos={selectQuienesSomos}
      />
        <Fab
              href= {createWhatsappLink(987207569, "Hola Comunidad Cristiana Casa Luz, quisiera contactarme con ustedes." )}
              target="_blank"
              aria-label="Expand"
              style = {{margin:'20px',backgroundColor:'#25d366', color:'white', position: 'fixed',zIndex: 1000, right: '6px', btn:'60px', bottom: '6px'}}>
          <WhatsAppIcon fontSize="large"/>
        </Fab>
        
      <Footer />
     
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
