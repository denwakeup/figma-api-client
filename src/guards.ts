import * as Types from '@figma/rest-api-spec';

import { NodeType, PickNode } from './types';

export function isNodeType<NType extends NodeType>(
    node: Types.Node,
    type: NType,
): node is PickNode<NType> {
    return node.type === type;
}

export function isPaintSolid(paint: Types.Paint): paint is Types.SolidPaint {
    return paint.type === 'SOLID';
}

export function isPaintGradient(paint: Types.Paint): paint is Types.GradientPaint {
    return (
        paint.type === 'GRADIENT_ANGULAR' ||
        paint.type === 'GRADIENT_DIAMOND' ||
        paint.type === 'GRADIENT_LINEAR' ||
        paint.type === 'GRADIENT_RADIAL'
    );
}

export function isPaintImage(paint: Types.Paint): paint is Types.ImagePaint {
    return paint.type === 'IMAGE';
}

export function isEffectShadow(
    effect: Types.Effect,
): effect is Types.DropShadowEffect | Types.InnerShadowEffect {
    return effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW';
}

export function isEffectBlur(effect: Types.Effect): effect is Types.BlurEffect {
    return effect.type === 'BACKGROUND_BLUR' || effect.type === 'LAYER_BLUR';
}
