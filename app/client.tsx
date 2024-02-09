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
  line-height: 22px;
  color: black;
  transition: all 200ms ease;
  .project-title {
    transition: color 200ms ease;
  }
  @media(hover: hover) {
    &:hover {
      transform: translateX(2px);
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.02);
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
  line-height: 16px;
`;


export default function Home() {
  return (
    <>
      <div style={{ marginBottom: 10 }}>A community-curated list of resources about CryptoPunks.</div>
      {PROJECTS.map((p, i) => (
        <ProjectItemContainer key={`p-${i}`} as="a" href={p.url} target="_blank" rel="noreferrer">
                    <div style={{
            width: 45,
            height: 45,
            marginRight: 10,
            // borderRadius: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '100%',
          }}>
              {p.logo ? (
          <Image
            src={p.logo || `https://logo.clearbit.com/${getDomain(p.url)}`}
            alt={p.url}
            width={43}
            height={43}
            style={{
              objectFit: 'cover',
              borderRadius: '100%',
            }}
          />                  
        ) : null}
          </div>
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
              fontSize: 15,
              lineHeight: 1.4,
              marginTop: 2
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
