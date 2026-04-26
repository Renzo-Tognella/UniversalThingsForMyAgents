import { Metadata } from 'next';
import { Suspense } from 'react';

import { ProposalsTable } from '@/components/tables/proposals-table';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import { proposalsApi } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Dashboard | Proposal Monitor',
  description: 'Visualize suas propostas e estatísticas',
};

// Server Component - Data Fetching no servidor
export default async function DashboardPage() {
  // Busca dados no servidor
  const proposals = await proposalsApi.getAll().then((res) => res.data);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Acompanhe suas propostas e métricas de desempenho.
        </p>
      </div>

      {/* Stats Cards */}
      <Suspense fallback={<LoadingSpinner />}>
        <StatsCards />
      </Suspense>

      {/* Proposals Table */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Propostas Recentes</h2>
        <Suspense fallback={<LoadingSpinner />}>
          <ProposalsTable data={proposals} />
        </Suspense>
      </section>
    </div>
  );
}
