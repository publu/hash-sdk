import {util} from '../utils';
import {hardwareWallet} from './resources/hardware-wallet';
import {softwareSdk} from './resources/software-sdk';
import {composerLogo} from './resources/composer-logo';

export const Images = {
    hardwareWallet:util.svgToUrlGenerator(hardwareWallet),
    softwareSDKImage:util.svgToUrlGenerator(softwareSdk),
    composerLogo:util.svgToUrlGenerator(composerLogo)
}

