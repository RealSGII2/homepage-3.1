import { styled } from 'styles/stitches';
import type { FC, ReactNode } from 'react'

const ContentBox = styled('section', {
	boxSizing: 'content-box',

	padding: '0 3rem',
	margin: '0 auto',

	width: '100%',
	maxWidth: 1260,

    variants: {
        hero: {
            true: {
                maxWidth: 'calc(1260px + 3rem)',
                height: 'calc(100vh - 72px * 3)',

                paddingBottom: 72,
                paddingRight: 0,
                paddingTop: 128,
            }
        }
    }
});

export const HeroBox: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ContentBox hero>
            <div style={{ paddingRight: 'max(3rem, 35%)' }}>
                {children}
            </div>
        </ContentBox>
    )
}

export default ContentBox;
