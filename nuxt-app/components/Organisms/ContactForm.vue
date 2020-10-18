<template>
  <form :id="id" class="contactForm" @submit.prevent="send()">
    <ContactDescription class="contactForm__description" />
    <div class="contactForm__name">
      <InputName
        :form="id"
        :value="contact.name"
        @input="contact.name = $event"
      />
      <div class="contactForm__name--error">
        <ContactError :error="error.name" />
      </div>
    </div>
    <div class="contactForm__email">
      <InputEmail
        :form="id"
        :email="contact.email"
        @input="contact.email = $event"
      />
      <div class="contactForm__email--error">
        <ContactError :error="error.email" />
      </div>
    </div>
    <div class="contactForm__subject">
      <InputSubject
        :form="id"
        :subject="contact.subject"
        @input="contact.subject = $event"
      />
      <div class="contactForm__subject--error">
        <ContactError :error="error.subject" />
      </div>
    </div>
    <div class="contactForm__body">
      <TextareaBody
        :form="id"
        :body="contact.body"
        @input="contact.body = $event"
      />
      <div class="contactForm__body--error">
        <ContactError :error="error.body" />
      </div>
    </div>
    <div class="contactForm__note">
      <ContactNote />
    </div>
    <div class="contactForm__interactive">
      <div class="contactForm__interactive__response">
        <ContactResponse :response="response" />
      </div>
    </div>
    <div class="contactForm__operation">
      <ContactOperation :form="id" />
    </div>
  </form>
</template>

<script>
import * as axios from "axios"

import ContactDescription from "@/components/Molecules/ContactDescription"
import InputName from "@/components/Molecules/InputName"
import InputEmail from "@/components/Molecules/InputEmail"
import InputSubject from "@/components/Molecules/InputSubject"
import TextareaBody from "@/components/Molecules/TextareaBody"
import ContactNote from "@/components/Molecules/ContactNote"
import ContactError from "@/components/Molecules/ContactError"
import ContactResponse from "@/components/Molecules/ContactResponse"
import ContactOperation from "@/components/Organisms/ContactOperation"

export default {
  components: {
    ContactDescription,
    InputName,
    InputEmail,
    InputSubject,
    TextareaBody,
    ContactNote,
    ContactError,
    ContactResponse,
    ContactOperation,
  },
  data: () => ({
    id: "contact",
    contact: {
      name: "",
      email: "",
      subject: "",
      body: "",
    },
    error: {
      name: "",
      email: "",
      subject: "", // 必須ではないが間隔を揃えるため用意
      body: "",
    },
    response: "",
    isLoading: false,
    loadingHeight: 25,
    loadingWidth: 25,
  }),
  watch: {
    "contact.name"(name) {
      if (!name) {
        this.error.name = "お名前を入力してください。"
      } else {
        this.error.name = ""
      }
    },
    "contact.email"(email) {
      // メールアドレスの正規表現
      const mailRegex1 = new RegExp(
        "(?:[-!#-'*+/-9=?A-Z^-~]+.?(?:.[-!#-'*+/-9=?A-Z^-~]+)*|\"(?:[!#-[]-~]|\\\\[\x09 -~])*\")@[-!#-'*+/-9=?A-Z^-~]+(?:.[-!#-'*+/-9=?A-Z^-~]+)*"
      )
      const mailRegex2 = new RegExp("^[^@]+@[^@]+$")

      if (!email) {
        this.error.email = "メールアドレスを入力してください。"
      } else if (email.match(/[^\x01-\x7E\xA1-\xDF]/g) !== null) {
        this.error.email = "全角文字が含まれています。"
      } else if (!(email.match(mailRegex1) && email.match(mailRegex2))) {
        this.error.email = "正しいメールアドレスを入力してください。"
      } else {
        this.error.email = ""
      }
    },
    "contact.body"(input) {
      if (!input) {
        this.error.body = "本文を入力してください。"
      } else {
        this.error.body = ""
      }
    },
  },
  methods: {
    /**
     * フォームの送信
     */
    async send() {
      this.isLoading = true // ローディング開始

      const response = await axios
        .post(process.env.messageApi, {
          name: this.contact.name,
          email: this.contact.email,
          subject: this.contact.subject,
          body: this.contact.body,
        })
        .then((response) => {
          return response
        })
        .catch((error) => {
          return { data: { message: error.message } }
        })

      if (response.status === 200) {
        this.isLoading = false // ローディング終了
        alert("メッセージを送信しました。ホーム画面に戻ります。")
        this.$router.push({ path: "/" })
      } else {
        this.response =
          "メッセージの送信に失敗しました。しばらく時間をおいて送信するか、お手数ですが canji.preengineer@gmail.com に直接お問い合わせください。"
      }

      this.isLoading = false // ローディング終了
    },
  },
}
</script>

<style lang="scss">
.contactForm {
  margin: 8px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  &__description {
    margin-bottom: 24px;
  }

  &__name,
  &__email,
  &__subject,
  &__body {
    width: 100%;
    margin: 8px auto;

    &--error {
      height: $base-font-size; // エラーのフォントサイズと同じにすること
      margin: 12px 0;
      color: orangered;
    }
  }

  &__note {
    width: 100%;
    margin: 16px auto;
  }

  &__interactive {
    height: 25px; // loadingエフェクトの縦幅と同一にすること
    width: 100%;
    margin: 4px auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    &__response {
      margin: 0 auto 0 0;
    }

    &__loading {
      margin: 0 24px 0 auto;
    }
  }

  &__operation {
    width: 100%;
    margin: 8px auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
