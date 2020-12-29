import React, { Fragment, memo } from 'react'

import { footerLinks, footerImages } from '@/common/local-data'

import {
  FooterWrapper,
  FooterRight,
  FooterLeft
} from "./style";

export default memo(function YMAppFooter() {
  return (
    <FooterWrapper>
      <div className="container wrap-v2">
        <FooterLeft>
          <div className="footer-info">
            {
              footerLinks.map((item, index) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link}>{item.title}</a>
                    <span className="h-divider">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="footer-info">
            <span className="copyright">网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
          </div>
          <div className="footer-info">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </div>
          <div className="footer-info">
            <span>粤B2-20090191-18</span>
            <a href="https://beian.miit.gov.cn/#/Integrated/index">工业和信息化部备案管理系统网站</a>
          </div>
        </FooterLeft>
        <FooterRight>
          <div className="footer-links">
            {
              footerImages.map((item, index) => {
                return (
                  <div className="item" key={item.link}>
                    <a className="link" href={item.link}> </a>
                    <span className="title"></span>
                  </div>
                )
              })
            }
          </div>
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
