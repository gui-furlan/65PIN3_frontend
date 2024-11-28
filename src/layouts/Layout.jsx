import React from 'react';
import '../css/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="sidebar-profile">
          <div className="profile-picture"></div>
          <h3>Ben Dover</h3>
          <p>Bacharelado em Engenharia de Software</p>
        </div>
        <nav className="sidebar-menu">
          <button>Visão Geral</button>
          <button>Minhas Atividades</button>
          <button>Relatórios</button>
        </nav>
        <div className="sidebar-footer">
          <button>Meu Perfil</button>
          <button>Sair</button>
        </div>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
