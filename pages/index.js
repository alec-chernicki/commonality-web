import Head from 'next/head';
import {
  UIApp,
  UIPage,
  UISection,
  UIFlex,
  UIBox,
  UIImage,
  UIHeader,
  UITag,
  UIForm,
  UITextInput,
  UIButton,
  UITextStyle,
  Colors,
  UIFormControl,
} from '@alecortega/design-system';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';

const AccentBackground = styled.div`
  user-select: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 55%;
  background-image: url('/background.svg');
  background-repeat: repeat;
  background-size: 1250px;
  background-position: center;
  width: 1500px;
  height: 1000px;
  z-index: 10;
  overflow: hidden;
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
  }
`;

const AccentSlash = styled.div`
  position: absolute;
  background-color: #fff;
  top: 0;
  left: -800px;
  bottom: 0;
  width: 1000px;
  transform: skewX(-10deg);
`;

const Home = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email')
      .required('Required'),
  });

  const handleSubmit = (values: { email: string }) => {
    axios.post(
      'https://api.hsforms.com/submissions/v3/integration/submit/7282015/b4ba2fcb-0a8c-4e1a-9bc6-dfdd544d89be',
      {
        fields: [
          {
            name: 'email',
            value: values.email,
          },
        ],
      }
    );
  };

  return (
    <UIApp use="marketing">
      <Head>
        <title>Commonality</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hrd8sxz.css" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-66576358-5"
        ></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-66576358-5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-66576358-5');
        </script>


        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/7282015.js"
        ></script>
      </Head>
      <UIPage>
        <UISection fullscreen={true}>
          <UIFlex>
            <UIBox basis="150px" grow={0}>
              <UIImage src="/commonality-word.svg" />
            </UIBox>
          </UIFlex>
          <UIFlex className="m-top-14">
            <UIBox basis="600px">
              <UITag use="info" className="display-inline-block">
                Coming soon
              </UITag>
              <UIHeader level="1">
                Align every employee toward common goals.
              </UIHeader>

              <UIHeader level="5" tag="2">
                <UITextStyle use="info">
                  Collaboration software that helps every employee make an
                  impact on your business.
                </UITextStyle>
              </UIHeader>
              <UIForm
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                initialValues={{ email: '' }}
                className="m-top-6"
              >
                <UIFlex align="center">
                  <UIBox basis={{ sm: '100%', md: '350px' }}>
                    <UIFormControl name="email">
                      <UITextInput
                        placeholder="Enter your email address"
                        name="email"
                      />
                    </UIFormControl>
                  </UIBox>
                  <UIBox basis={{ sm: '100%', md: 'auto' }}>
                    <UIButton
                      type="submit"
                      className="m-top-4 md:m-top-0 md:m-left-2 sm:display-block"
                    >
                      Join waitlist
                    </UIButton>
                  </UIBox>
                </UIFlex>
              </UIForm>
            </UIBox>
          </UIFlex>
        </UISection>
        <AccentBackground>
          <AccentSlash />
        </AccentBackground>
      </UIPage>
    </UIApp>
  );
};

export default Home;
