import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import CasasLuz from "./casasLuz/CasasLuz";
import Niños from "./niños/Niños";
import Jovenes from "./jovenes/Jovenes";
import Mujeres from "./mujeres/Mujeres";
import Hombres from "./hombres/Hombres";
import Matrimonios from "./matrimonios/Matrimonios";
import Cursos from "./cursos/Cursos";
import AcercaDe from "./acercade/AcercaDe";

function Routing(props) {
  const { blogPosts, selectBlog, selectHome,selectMatrimonios, 
    selectCursos, selectHombres,selectJovenes, selectMujeres, selectAcercaDe,
    selectNiños, selectCasasLuz } = props;
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      <PropsRoute
        exact
        path="/niños"
        component={Niños}
        selectNiños={selectNiños}
      />
      <PropsRoute
        exact
        path="/casasLuz"
        component={CasasLuz}
        selectCasasLuz={selectCasasLuz}
      />
      <PropsRoute
        exact
        path="/acercade"
        component={AcercaDe}
        selectAcercaDe = {selectAcercaDe}
      />
      <PropsRoute
        exact
        path="/hombres"
        component={Hombres}
        selectHombres={selectHombres}
      />
      <PropsRoute
        exact
        path="/mujeres"
        component={Mujeres}
        selectMujeres={selectMujeres}
      />

      <PropsRoute
        exact
        path="/jovenes"
        component={Jovenes}
        selectJovenes={selectJovenes}
      />
      <PropsRoute
        exact
        path="/cursos"
        component={Cursos}
        selectCursos={selectCursos}
      />
      <PropsRoute
        exact
        path="/matrimonios"
        component={Matrimonios}
        selectMatrimonios={selectMatrimonios}
      />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
  selectHombres: PropTypes.func.isRequired,
  selectCasasLuz: PropTypes.func.isRequired,
  selectAcercaDe: PropTypes.func.isRequired,
  selectMujeres: PropTypes.func.isRequired,
  selectNiños: PropTypes.func.isRequired,
  selectJovenes: PropTypes.func.isRequired,
  selectCursos: PropTypes.func.isRequired,
  selectMatrimonios: PropTypes.func.isRequired,
};

export default memo(Routing);
