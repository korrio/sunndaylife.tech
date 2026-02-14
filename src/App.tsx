import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import CaseStudies from '@/pages/CaseStudies';
import CaseStudyDetail from '@/pages/CaseStudyDetail';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';

// Admin
import { AdminLayout } from '@/admin/components/AdminLayout';
import AdminDashboard from '@/admin/pages/Dashboard';
import CaseStudiesAdmin from '@/admin/pages/CaseStudiesAdmin';
import CaseStudyNew from '@/admin/pages/CaseStudyNew';
import CaseStudyEdit from '@/admin/pages/CaseStudyEdit';
import TeamAdmin from '@/admin/pages/TeamAdmin';
import TeamMemberNew from '@/admin/pages/TeamMemberNew';
import TeamMemberEdit from '@/admin/pages/TeamMemberEdit';
import MediaAdmin from '@/admin/pages/MediaAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="pages" element={<div>Pages Admin (Coming Soon)</div>} />
          <Route path="case-studies" element={<CaseStudiesAdmin />} />
          <Route path="case-studies/new" element={<CaseStudyNew />} />
          <Route path="case-studies/:id/edit" element={<CaseStudyEdit />} />
          <Route path="team" element={<TeamAdmin />} />
          <Route path="team/new" element={<TeamMemberNew />} />
          <Route path="team/:id/edit" element={<TeamMemberEdit />} />
          <Route path="media" element={<MediaAdmin />} />
          <Route path="settings" element={<div>Settings (Coming Soon)</div>} />
        </Route>

        {/* Public Routes */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
