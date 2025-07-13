import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BreadcrumbListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 0.5em;
  color: ${({ theme }) => theme.colors.separator};
`;

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, separator = '/' }) => (
  <BreadcrumbNav aria-label="breadcrumbs">
    <BreadcrumbList>
      {items.map((item, idx) => (
        <BreadcrumbListItem key={item.label + idx}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          {idx < items.length - 1 && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
        </BreadcrumbListItem>
      ))}
    </BreadcrumbList>
  </BreadcrumbNav>
);
