import {
  UIPage,
  UISection,
  UIFlex,
  UIBox,
  UIImage,
  UIHeader,
  UIForm,
  UITextInput,
  UIButton,
  useToasts,
} from '@alecortega/design-system';
import axios from 'axios';

const HomePage = () => {
  const { addToast } = useToasts();
  const handleSubmit = (values: { email: string }) => {
    axios
      .post(
        'https://api.hsforms.com/submissions/v3/integration/submit/7282015/b4ba2fcb-0a8c-4e1a-9bc6-dfdd544d89be',
        {
          fields: [
            {
              name: 'email',
              value: values.email,
            },
          ],
        }
      )
      .then(() => {
        addToast(
          "You've successfully registered for the Commmonality beta. We'll let you know when we have more updates!",
          { appearance: 'success' }
        );
      })
      .catch(() => {});
  };

  return (
    <>
      <UIPage>
        <UISection
          use="dark"
          backgroundUrl="/commonality-hero.svg"
          fullWidth={true}
          fullscreen={true}
        >
          <UIFlex justify={{ sm: 'center', md: 'flex-start' }}>
            <UIBox basis={{ sm: '140px', md: '180px' }} grow={0} shrink={0}>
              <UIImage
                src="/commonality-word-light.svg"
                alt="Commonality logo"
              />
            </UIBox>
          </UIFlex>
          <UIFlex justify="center" className="m-top-12 md:m-top-14 p-x-2">
            <UIBox basis="800x" grow={0} shrink={2} className="text-center">
              <UIHeader>Build your company's north star</UIHeader>
              <UIFlex justify="center">
                <UIBox basis="500px" grow={0} shrink={2}>
                  <UIHeader level="5">
                    Unify data from the software your employees love and tie
                    goals from every team back to key company metrics.
                  </UIHeader>
                </UIBox>
              </UIFlex>
              <UIFlex justify="center" className="m-top-6">
                <UIBox basis="400px">
                  <UIForm onSubmit={handleSubmit} initialValues={{ email: '' }}>
                    <UIFlex align="center">
                      <UIBox
                        grow={2}
                        className="m-bottom-4 md:m-bottom-0 md:m-right-2"
                        basis={{ sm: '100%', md: 'auto' }}
                      >
                        <UITextInput
                          name="email"
                          placeholder="your@email.com"
                        />
                      </UIBox>
                      <UIBox basis={{ sm: '100%', md: 'auto' }}>
                        <UIButton fullWidth={true} type="submit">
                          Register
                        </UIButton>
                      </UIBox>
                    </UIFlex>
                  </UIForm>
                </UIBox>
              </UIFlex>
            </UIBox>
          </UIFlex>
        </UISection>
        <UISection use="neutral" className="p-bottom-10">
          <UIFlex justify="center" className="m-top-6">
            <UIBox basis="960px" grow={0}>
              <UIFlex align="center" justify="center">
                <UIBox
                  basis={{ sm: '100%', md: '50%' }}
                  grow={0}
                  className="md:m-right-6 m-bottom-4 md:m-bottom-0"
                >
                  <UIImage src="/goals.svg" alt="OKR goal example" />
                </UIBox>
                <UIBox basis="400px" className="text-center md:text-left">
                  <UIHeader level="3">Measureable goals</UIHeader>
                  <p>
                    From OKRS to SMART goals and everything in between, create
                    goals unique caterered to your business. Create measurable
                    results that define success and monitor the progression of
                    those goals against your financial deadlines. Manually
                    update goals or automatically collect data from the tools
                    your employees already love using.
                  </p>
                </UIBox>
              </UIFlex>
            </UIBox>
          </UIFlex>
        </UISection>
        <UISection use="light" className="p-top-10">
          <UIFlex justify="center" className="m-top-6">
            <UIBox basis="960px" grow={0}>
              <UIFlex align="center" justify="center">
                <UIBox
                  basis={{ sm: '100%', md: '50%' }}
                  grow={0}
                  className="md:m-right-6 m-bottom-4 md:m-bottom-0"
                >
                  <UIImage
                    src="/alignment.svg"
                    alt="Company alignment example"
                  />
                </UIBox>
                <UIBox basis="400px" className="text-center md:text-left">
                  <UIHeader level="3">Top to bottom alignment</UIHeader>
                  <p>
                    Gain true insight into the performance of your business and
                    tie goals from every team back to key company metrics.
                    Instantly view the health of your company and discover areas
                    of opportunity or areas for investment.
                  </p>
                </UIBox>
              </UIFlex>
            </UIBox>
          </UIFlex>
        </UISection>
        <UISection
          use="light"
          className="p-y-14"
          backgroundUrl="/bottom-divider.svg"
        />
        <UISection use="dark" className="p-top-10 p-bottom-15">
          <UIFlex justify="center">
            <UIBox basis="600px" className="text-center">
              <UIHeader level="3">Get notified when we launch</UIHeader>
              <p>
                We're still working on getting everything perfect for you,
                signup for updates and be the first to know when we launch.
              </p>
              <UIFlex justify="center" className="m-top-6">
                <UIBox basis="400px">
                  <UIForm onSubmit={handleSubmit} initialValues={{ email: '' }}>
                    <UIFlex align="center">
                      <UIBox
                        grow={2}
                        className="m-bottom-4 md:m-bottom-0 md:m-right-2"
                        basis={{ sm: '100%', md: 'auto' }}
                      >
                        <UITextInput
                          name="email"
                          placeholder="your@email.com"
                        />
                      </UIBox>
                      <UIBox basis={{ sm: '100%', md: 'auto' }}>
                        <UIButton fullWidth={true} type="submit">
                          Register
                        </UIButton>
                      </UIBox>
                    </UIFlex>
                  </UIForm>
                </UIBox>
              </UIFlex>
            </UIBox>
          </UIFlex>
        </UISection>
      </UIPage>
    </>
  );
};

export default HomePage;
