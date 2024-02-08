'use client';

import Image from 'next/image';
import styled from 'styled-components';
import PROJECTS from '~/data/projects';
import * as COLORS from '~/lib/colors';

const ProjectItemContainer = styled.div`
  cursor: pointer;
  padding: 10px 10px;
  margin: 0 -10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 24px;
  color: black;
  .project-title {
    transition: color 200ms ease;
  }
  @media(hover: hover) {
    &:hover {
      text-decoration: none;
      .project-title {
        color: ${COLORS.punks};      
      }
    }
  }
`;

function getDomain(url: string) {
  return new URL(url).hostname;
}

const CategoryItem = styled.div`
  margin-right: 5px;
  width: fit-content;
  font-size: 13px;
  line-height: 20px;
`;


export default function Home() {
  return (
    <>
      {PROJECTS.map((p, i) => (
        <ProjectItemContainer key={`p-${i}`} as="a" href={p.url} target="_blank" rel="noreferrer">
          <Image
            src={p.logo || `https://logo.clearbit.com/${getDomain(p.url)}`}
            alt={p.url}
            width={50}
            height={50}
            style={{
              objectFit: 'cover',
              marginRight: 10
            }}
          />
          <div style={{ flex: 1 }}>
            <div>
            <span className="project-title" style={{
              fontWeight: 'bold',
              }}>{p.name}</span>
              {/* <a href={p.url} target="_blank" rel="noreferrer noopener" style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.5)',
                marginLeft: 10,
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>{getDomain(p.url)}</a> */}
            </div>
            <div style={{
              fontSize: 15
            }}>{p.description}</div>
            {/* <div>
              {p.categories.map((c, j) => (
                <CategoryItem key={`c-${i}-${j}`}>{c}</CategoryItem>
              ))}
            </div> */}
          </div>
        </ProjectItemContainer>
      ))}
    </>
  );
}
