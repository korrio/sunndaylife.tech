import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Background from '@/pages/Background';
import Services from '@/pages/Services';
import CaseStudies from '@/pages/CaseStudies';
import CaseStudyDetail from '@/pages/CaseStudyDetail';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';
import News from '@/pages/News';
import NewsDetail from '@/pages/NewsDetail';

// Admin
import { AdminLayout } from '@/admin/components/AdminLayout';
import AdminDashboard from '@/admin/pages/Dashboard';
import PagesAdmin from '@/admin/pages/PagesAdmin';
import PageEdit from '@/admin/pages/PageEdit';
import CaseStudiesAdmin from '@/admin/pages/CaseStudiesAdmin';
import CaseStudyNew from '@/admin/pages/CaseStudyNew';
import CaseStudyEdit from '@/admin/pages/CaseStudyEdit';
import TeamAdmin from '@/admin/pages/TeamAdmin';
import TeamMemberNew from '@/admin/pages/TeamMemberNew';
import TeamMemberEdit from '@/admin/pages/TeamMemberEdit';
import MediaAdmin from '@/admin/pages/MediaAdmin';
import Settings from '@/admin/pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="pages" element={<PagesAdmin />} />
          <Route path="pages/:id/edit" element={<PageEdit />} />
          <Route path="case-studies" element={<CaseStudiesAdmin />} />
          <Route path="case-studies/new" element={<CaseStudyNew />} />
          <Route path="case-studies/:id/edit" element={<CaseStudyEdit />} />
          <Route path="team" element={<TeamAdmin />} />
          <Route path="team/new" element={<TeamMemberNew />} />
          <Route path="team/:id/edit" element={<TeamMemberEdit />} />
          <Route path="media" element={<MediaAdmin />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Public Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/background" element={<Background />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
