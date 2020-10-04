from rest_framework import serializers
from .models import Mask


class MaskSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'day_week',
            'date_time',
            'with_mask',
            'without_mask',
        )
        model = Mask