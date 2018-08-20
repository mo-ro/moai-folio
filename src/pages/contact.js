import React from 'react'
import Link from 'gatsby-link'
import PageHeading from '../components/PageHeading'

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <PageHeading mainHeading="Contact" subHeading="お気軽にどうぞ。" />
        <form className="contact-form" action="https://docs.google.com/forms/d/e/1FAIpQLScT-Wkky2GXqSbA25afIgxIXLrAqqWVQQffNf3YgZzL2LVZpQ/formResponse" method="POST" target="_self">
          <label htmlFor="name">名前</label>
          <input id="email" type="text" name="entry.340486148" placeholder="最愛 太郎" />
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="text" name="entry.900098914" placeholder="example@mail.co.jp" />
          <label htmlFor="msg">お問い合わせ内容</label>
          <textarea id="msg" name="entry.157314265" placeholder="お気軽にお問い合わせください。" required></textarea>
          <div className="button-wrapper">
            <button type="submit" name="button" value="送信">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact