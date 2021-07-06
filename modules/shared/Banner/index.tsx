import { Box } from '@theme-ui/components'
import { BannerButtons } from '../../campaign/BannerButtons'
import { styles } from './styles'

export const Banner = ({ hideButtons = false }) => (
  <Box sx={styles.banner}>
    <img
      sizes="50vw"
      srcSet="/assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_190.jpg 190w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_510.jpg 510w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_764.jpg 764w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_956.jpg 956w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_1095.jpg 1095w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_1268.jpg 1268w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_1405.jpg 1405w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_1563.jpg 1563w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_1784.jpg 1784w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_2028.jpg 2028w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_1949.jpg 1949w, /assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_2040.jpg 2040w"
      src="/assets/campaign/June_4th_birthday_BUB_A_kxcvzj_c_scale_w_2040.jpg"
      alt="Happy cat"
    />
    {!hideButtons && <BannerButtons sx={styles.buttons} />}
  </Box>
)
