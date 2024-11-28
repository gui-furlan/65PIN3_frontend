import React from 'react';
import Layout from '../layouts/Layout';

const StudentDashboard = () => {
  return (
    <Layout>
      <div>
        <h1>Seu progresso</h1>
        <div style={{ background: '#FFF', padding: '1rem', marginBottom: '2rem', borderRadius: '8px' }}>
          <p>Progresso acadêmico do estudante</p>
        </div>
        <h2>Suas atividades</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: '#FFF', padding: '1rem', borderRadius: '8px', width: '30%' }}>
            <p>Atividade 1</p>
          </div>
          <div style={{ background: '#FFF', padding: '1rem', borderRadius: '8px', width: '30%' }}>
            <p>Atividade 2</p>
          </div>
          <div style={{ background: '#FFF', padding: '1rem', borderRadius: '8px', width: '30%' }}>
            <p>Atividade 3</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
