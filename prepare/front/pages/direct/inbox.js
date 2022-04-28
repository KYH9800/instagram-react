import React from 'react';
import Head from 'next/head';
// CSS
import { ImboxWrapper } from '../../style/inbox';
//antd
import { DownOutlined, FormOutlined } from '@ant-design/icons';
// components
import Layout from '../../components/Layout';
import DirectUserList from '../../components/DirectUserList';

const Direct = () => {
  return (
    <Layout>
      <Head>
        <title>받은 메세지함 | Direct</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImboxWrapper>
        <div id="inbox-wrapper">
          <div id="direct-list-wrapper">
            <div id="direct-my-name-wrapper">
              <div className="direct-my-name">
                <a className="change-my-id">
                  <h2>kyh0506</h2>
                  <div className="down-outline">
                    <svg className="v-icon" role="img" viewBox="0 0 24 24">
                      <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                    </svg>
                  </div>
                </a>
                <div className="new-massege">
                  <a>
                    <svg className="new-massege" role="img" viewBox="0 0 24 24">
                      <path
                        d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></path>
                      <path
                        d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></path>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="16.848"
                        x2="20.076"
                        y1="3.924"
                        y2="7.153"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div id="chat-list-wrapper">
              <div className="direct-users-list">
                <DirectUserList />
                <DirectUserList />
                <DirectUserList />
              </div>
            </div>
          </div>

          <div id="message-wrapper">
            <div className="null-item">
              <div>
                <svg
                  aria-label="Direct"
                  className="direct-icon"
                  color="#262626"
                  fill="#262626"
                  height="96"
                  role="img"
                  viewBox="0 0 96 96"
                  width="96">
                  <circle
                    cx="48"
                    cy="48"
                    fill="none"
                    r="47"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"></circle>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="69.286"
                    x2="41.447"
                    y1="33.21"
                    y2="48.804"></line>
                  <polygon
                    fill="none"
                    points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"></polygon>
                </svg>
              </div>
              <div id="null-massege-box">
                <h2>내 메세지</h2>
                <p>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</p>
                <button>메시지 보내기</button>
              </div>
            </div>
          </div>
        </div>
      </ImboxWrapper>
    </Layout>
  );
};

export default Direct;