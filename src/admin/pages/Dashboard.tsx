import { StatCard } from '../components/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Total Pages', value: '4', change: 'Published' },
  { label: 'Case Studies', value: '5', change: 'Published' },
  { label: 'Team Members', value: '2', change: 'Active' },
  { label: 'Media Files', value: '8', change: 'Images' },
];

const recentActivity = [
  { action: 'Updated', item: 'Home Page', time: '2 hours ago' },
  { action: 'Created', item: 'Timor Leste Case Study', time: '1 day ago' },
  { action: 'Updated', item: 'Phongsaphat Duma Profile', time: '2 days ago' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
        <p className="text-gray-500">Manage your website content and settings.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant={activity.action === 'Created' ? 'default' : 'outline'}>
                      {activity.action}
                    </Badge>
                    <span className="text-sm font-medium">{activity.item}</span>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { label: 'Edit Home Page', href: '/admin/pages/home', desc: 'Update hero content' },
                { label: 'Manage Case Studies', href: '/admin/case-studies', desc: 'Add or edit projects' },
                { label: 'Update Team', href: '/admin/team', desc: 'Edit team profiles' },
                { label: 'Upload Media', href: '/admin/media', desc: 'Add images' },
              ].map((action) => (
                <Link
                  key={action.href}
                  to={action.href}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded hover:border-black hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium">{action.label}</p>
                    <p className="text-xs text-gray-500">{action.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
