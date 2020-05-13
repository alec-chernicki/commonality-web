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
import Head from 'next/head';

const Home = () => {
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
    <UIApp>
      <Head>
        <title>Commonality</title>
      </Head>
      <UIPage>
        <UISection
          use="dark"
          backgroundUrl="/commonality-hero.svg"
          fullWidth={true}
          fullscreen={true}
        >
          <UIFlex>
            <UIBox basis="200px" grow={0} shrink={0}>
              <UIImage src="/commonality-word-light.svg" />
            </UIBox>
          </UIFlex>
          <UIFlex justify="center" className="m-top-15 p-x-2">
            <UIBox basis="500px" grow={0} shrink={0} className="text-center">
              <UIHeader>Build your north star</UIHeader>
              <UIHeader level="5">
                Unify data from the software your employees love and align all
                your teams towards common goals.
              </UIHeader>
              <UIForm
                onSubmit={handleSubmit}
                initialValues={{ email: '' }}
                className="m-top-8"
              >
                <UIFlex align="center">
                  <UIBox grow={2} className="m-right-2">
                    <UITextInput name="email" />
                  </UIBox>
                  <UIBox>
                    <UIButton>Register</UIButton>
                  </UIBox>
                </UIFlex>
              </UIForm>
            </UIBox>
          </UIFlex>
        </UISection>
        <UISection use="neutral">
          <UIFlex>
            <UIBox basis="50%"></UIBox>
            <UIBox basis="400px">
              <UIHeader level="3">Measureable goals</UIHeader>
              <p>
                From OKRS to SMART goals and everything in between, create goals
                unique caterered to your business. Create measurable results
                that define success and monitor the progression of those goals
                against your financial deadlines. Manually update goals or
                automatically collect data from the tools your employees already
                love using.
              </p>
            </UIBox>
          </UIFlex>
        </UISection>
        <UISection use="light">
          <UIFlex>
            <UIBox basis="50%"></UIBox>
            <UIBox basis="400px">
              <UIHeader level="3">Top to bottom alignment</UIHeader>
              <p>
                Gain true insight into the performance of your business and tie
                goals from every team back to key company metrics. Instantly
                view the health of your company and discover areas of
                opportunity or areas for investment.
              </p>
            </UIBox>
          </UIFlex>
        </UISection>
        <UISection use="dark"></UISection>
      </UIPage>
    </UIApp>
  );
};

export default Home;
